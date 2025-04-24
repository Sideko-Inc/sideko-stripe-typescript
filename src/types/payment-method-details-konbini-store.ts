import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsKonbiniStore = {
  /**
   * The name of the convenience store chain where the payment was completed.
   */
  chain?:
    | ("familymart" | "lawson" | "ministop" | "seicomart")
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsKonbiniStore without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsKonbiniStore = {
  chain?:
    | ("familymart" | "lawson" | "ministop" | "seicomart")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsKonbiniStore
 */
const SchemaIn$PaymentMethodDetailsKonbiniStore: z.ZodType<
  PaymentMethodDetailsKonbiniStore, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    chain: z
      .enum(["familymart", "lawson", "ministop", "seicomart"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      chain: "chain",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsKonbiniStore
 */
const SchemaOut$PaymentMethodDetailsKonbiniStore: z.ZodType<
  External$PaymentMethodDetailsKonbiniStore, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsKonbiniStore // the object to be transformed
> = z
  .object({
    chain: z
      .enum(["familymart", "lawson", "ministop", "seicomart"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      chain: "chain",
    });
  });

export const Schemas$PaymentMethodDetailsKonbiniStore = {
  in: SchemaIn$PaymentMethodDetailsKonbiniStore,
  out: SchemaOut$PaymentMethodDetailsKonbiniStore,
};
