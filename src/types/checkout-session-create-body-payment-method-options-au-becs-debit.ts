import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit = {
  setupFutureUsage?: "none" | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit =
  {
    setup_future_usage?: "none" | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
    target_date: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
    targetDate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAuBecsDebit,
  };
