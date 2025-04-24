/**
 * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
 */
export type PriceTiersModeEnum = "graduated" | "volume";
