/**
 * The business type. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
 */
export type AccountCreateBodyBusinessTypeEnum =
  | "company"
  | "government_entity"
  | "individual"
  | "non_profit";
