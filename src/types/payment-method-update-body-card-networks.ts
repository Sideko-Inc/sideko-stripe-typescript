import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodUpdateBodyCardNetworks
 */
export type PaymentMethodUpdateBodyCardNetworks = {
  preferred?: ("cartes_bancaires" | "mastercard" | "visa") | undefined;
};

/**
 * @internal
 * PaymentMethodUpdateBodyCardNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUpdateBodyCardNetworks = {
  preferred?: ("cartes_bancaires" | "mastercard" | "visa") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUpdateBodyCardNetworks
 */
const SchemaIn$PaymentMethodUpdateBodyCardNetworks: z.ZodType<
  PaymentMethodUpdateBodyCardNetworks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred: z.enum(["cartes_bancaires", "mastercard", "visa"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUpdateBodyCardNetworks
 */
const SchemaOut$PaymentMethodUpdateBodyCardNetworks: z.ZodType<
  External$PaymentMethodUpdateBodyCardNetworks, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUpdateBodyCardNetworks // the object to be transformed
> = z
  .object({
    preferred: z.enum(["cartes_bancaires", "mastercard", "visa"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred: "preferred",
    });
  });

export const Schemas$PaymentMethodUpdateBodyCardNetworks = {
  in: SchemaIn$PaymentMethodUpdateBodyCardNetworks,
  out: SchemaOut$PaymentMethodUpdateBodyCardNetworks,
};
