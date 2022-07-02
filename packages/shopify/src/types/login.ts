import * as Core from '@nafeira/commerce/types/login'
import type { CustomerAccessTokenCreateInput } from '../../schema'

export * from '@nafeira/commerce/types/login'

export type LoginOperation = Core.LoginOperation & {
  variables: CustomerAccessTokenCreateInput
}
