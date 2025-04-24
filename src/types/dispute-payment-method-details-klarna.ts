import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputePaymentMethodDetailsKlarna = {
  /**
   * The reason for the dispute as defined by Klarna
   */
  reasonCode?: string | null | undefined;
};

/**
 * @internal
 * DisputePaymentMethodDetailsKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputePaymentMethodDetailsKlarna = {
  reason_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputePaymentMethodDetailsKlarna
 */
const SchemaIn$DisputePaymentMethodDetailsKlarna: z.ZodType<
  DisputePaymentMethodDetailsKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reason_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reason_code: "reasonCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputePaymentMethodDetailsKlarna
 */
const SchemaOut$DisputePaymentMethodDetailsKlarna: z.ZodType<
  External$DisputePaymentMethodDetailsKlarna, // output type of this zod object
  z.ZodTypeDef,
  DisputePaymentMethodDetailsKlarna // the object to be transformed
> = z
  .object({
    reasonCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reasonCode: "reason_code",
    });
  });

export const Schemas$DisputePaymentMethodDetailsKlarna = {
  in: SchemaIn$DisputePaymentMethodDetailsKlarna,
  out: SchemaOut$DisputePaymentMethodDetailsKlarna,
};
