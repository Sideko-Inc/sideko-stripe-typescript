import {
  External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters,
  InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters,
  Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters,
} from "./invoice-payment-method-options-us-bank-account-linked-account-options-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions = {
  filters?:
    | InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters
    | undefined;
  /**
   * The list of permissions to request. The `payment_method` permission must be included.
   */
  permissions?:
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | undefined;
  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch?: ("balances" | "ownership" | "transactions")[] | null | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions =
  {
    filters?:
      | External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions
 */
const SchemaIn$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions: z.ZodType<
  InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters.in.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions
 */
const SchemaOut$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions: z.ZodType<
  External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions // the object to be transformed
> = z
  .object({
    filters:
      Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters.out.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions =
  {
    in: SchemaIn$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions,
    out: SchemaOut$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions,
  };
