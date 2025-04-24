/**
 * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
 */
export type PlanCreateBodyUsageTypeEnum = "licensed" | "metered";
