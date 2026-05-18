import { ref } from 'vue'
import type { PaginationParams, PaginationResponse } from './mock'

export interface UsePaginationOptions<T> {
  pageSize?: number
  immediate?: boolean
  loadMoreText?: string
  noMoreText?: string
}

export interface UsePaginationReturn<T> {
  list: ref<T[]>
  loading: ref<boolean>
  refreshing: ref<boolean>
  hasMore: ref<boolean>
  page: ref<number>
  error: ref<string | null>
  loadData: (params?: Partial<PaginationParams>) => Promise<void>
  onRefresh: () => Promise<void>
  onLoadMore: () => Promise<void>
  reset: () => void
}

export function usePagination<T>(
  fetchFn: (params: PaginationParams) => Promise<PaginationResponse<T>>,
  options: UsePaginationOptions<T> = {}
): UsePaginationReturn<T> {
  const { pageSize = 10, immediate = true, loadMoreText = '加载中...', noMoreText = '— 没有更多了 —' } = options

  const list = ref<T[]>([]) as any
  const loading = ref(false)
  const refreshing = ref(false)
  const hasMore = ref(true)
  const page = ref(1)
  const error = ref<string | null>(null)

  const loadData = async (params: Partial<PaginationParams> = {}) => {
    try {
      error.value = null
      const result = await fetchFn({
        page: params.page || page.value,
        pageSize: params.pageSize || pageSize,
      })

      if (params.page && params.page > 1) {
        list.value = [...list.value, ...result.list]
      } else {
        list.value = result.list
      }

      hasMore.value = result.hasMore
      page.value = result.page
    } catch (err: any) {
      error.value = err.message || '加载失败'
      uni.showToast({
        title: error.value,
        icon: 'none'
      })
    }
  }

  const onRefresh = async () => {
    if (refreshing.value) return

    refreshing.value = true
    page.value = 1
    hasMore.value = true

    try {
      await loadData({ page: 1 })
      uni.showToast({
        title: '刷新成功',
        icon: 'success'
      })
    } finally {
      refreshing.value = false
    }
  }

  const onLoadMore = async () => {
    if (loading.value || !hasMore.value) return

    loading.value = true

    try {
      const nextPage = page.value + 1
      await loadData({ page: nextPage })
    } finally {
      loading.value = false
    }
  }

  const reset = () => {
    list.value = []
    page.value = 1
    hasMore.value = true
    error.value = null
    loading.value = false
    refreshing.value = false
  }

  if (immediate) {
    loadData()
  }

  return {
    list,
    loading,
    refreshing,
    hasMore,
    page,
    error,
    loadData,
    onRefresh,
    onLoadMore,
    reset,
  }
}
