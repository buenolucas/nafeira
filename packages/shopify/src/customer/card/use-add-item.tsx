import useAddItem, {
  UseAddItem,
} from '@nafeira/commerce/customer/card/use-add-item'
import { MutationHook } from '@nafeira/commerce/utils/types'

export default useAddItem as UseAddItem<typeof handler>

export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {},
  useHook:
    ({ fetch }) =>
    () =>
    async () => ({}),
}
