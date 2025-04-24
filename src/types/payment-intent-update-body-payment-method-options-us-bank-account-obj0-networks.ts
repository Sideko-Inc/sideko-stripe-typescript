import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks // the object to be transformed
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  };
