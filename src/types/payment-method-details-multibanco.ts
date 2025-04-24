import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsMultibanco = {
  /**
   * Entity number associated with this Multibanco payment.
   */
  entity?: string | null | undefined;
  /**
   * Reference number associated with this Multibanco payment.
   */
  reference?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsMultibanco without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsMultibanco = {
  entity?: string | null | undefined;
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsMultibanco
 */
const SchemaIn$PaymentMethodDetailsMultibanco: z.ZodType<
  PaymentMethodDetailsMultibanco, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    entity: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entity: "entity",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsMultibanco
 */
const SchemaOut$PaymentMethodDetailsMultibanco: z.ZodType<
  External$PaymentMethodDetailsMultibanco, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsMultibanco // the object to be transformed
> = z
  .object({
    entity: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entity: "entity",
      reference: "reference",
    });
  });

export const Schemas$PaymentMethodDetailsMultibanco = {
  in: SchemaIn$PaymentMethodDetailsMultibanco,
  out: SchemaOut$PaymentMethodDetailsMultibanco,
};
