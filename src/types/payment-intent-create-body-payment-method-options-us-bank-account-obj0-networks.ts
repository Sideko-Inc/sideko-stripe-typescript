import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks // the object to be transformed
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0Networks,
  };
