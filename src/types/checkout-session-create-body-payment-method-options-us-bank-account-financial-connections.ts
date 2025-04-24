import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      permissions: "permissions",
      prefetch: "prefetch",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections // the object to be transformed
> = z
  .object({
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      permissions: "permissions",
      prefetch: "prefetch",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  };
