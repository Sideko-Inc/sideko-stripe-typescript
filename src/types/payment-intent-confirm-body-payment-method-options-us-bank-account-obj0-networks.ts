import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks // the object to be transformed
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  };
