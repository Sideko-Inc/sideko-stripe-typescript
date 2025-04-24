import {
  External$PaymentMethodDetailsKonbiniStore,
  PaymentMethodDetailsKonbiniStore,
  Schemas$PaymentMethodDetailsKonbiniStore,
} from "./payment-method-details-konbini-store";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsKonbini = {
  store?: PaymentMethodDetailsKonbiniStore | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsKonbini without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsKonbini = {
  store?: External$PaymentMethodDetailsKonbiniStore | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsKonbini
 */
const SchemaIn$PaymentMethodDetailsKonbini: z.ZodType<
  PaymentMethodDetailsKonbini, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    store: Schemas$PaymentMethodDetailsKonbiniStore.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      store: "store",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsKonbini
 */
const SchemaOut$PaymentMethodDetailsKonbini: z.ZodType<
  External$PaymentMethodDetailsKonbini, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsKonbini // the object to be transformed
> = z
  .object({
    store: Schemas$PaymentMethodDetailsKonbiniStore.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      store: "store",
    });
  });

export const Schemas$PaymentMethodDetailsKonbini = {
  in: SchemaIn$PaymentMethodDetailsKonbini,
  out: SchemaOut$PaymentMethodDetailsKonbini,
};
