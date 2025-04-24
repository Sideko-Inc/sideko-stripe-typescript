import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputePaymentMethodDetailsPaypal = {
  /**
   * The ID of the dispute in PayPal.
   */
  caseId?: string | null | undefined;
  /**
   * The reason for the dispute as defined by PayPal
   */
  reasonCode?: string | null | undefined;
};

/**
 * @internal
 * DisputePaymentMethodDetailsPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputePaymentMethodDetailsPaypal = {
  case_id?: string | null | undefined;
  reason_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputePaymentMethodDetailsPaypal
 */
const SchemaIn$DisputePaymentMethodDetailsPaypal: z.ZodType<
  DisputePaymentMethodDetailsPaypal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    case_id: z.string().nullable().optional(),
    reason_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      case_id: "caseId",
      reason_code: "reasonCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputePaymentMethodDetailsPaypal
 */
const SchemaOut$DisputePaymentMethodDetailsPaypal: z.ZodType<
  External$DisputePaymentMethodDetailsPaypal, // output type of this zod object
  z.ZodTypeDef,
  DisputePaymentMethodDetailsPaypal // the object to be transformed
> = z
  .object({
    caseId: z.string().nullable().optional(),
    reasonCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      caseId: "case_id",
      reasonCode: "reason_code",
    });
  });

export const Schemas$DisputePaymentMethodDetailsPaypal = {
  in: SchemaIn$DisputePaymentMethodDetailsPaypal,
  out: SchemaOut$DisputePaymentMethodDetailsPaypal,
};
