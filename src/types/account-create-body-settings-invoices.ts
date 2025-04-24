import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsInvoices
 */
export type AccountCreateBodySettingsInvoices = {
  hostedPaymentMethodSave?: ("always" | "never" | "offer") | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsInvoices without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsInvoices = {
  hosted_payment_method_save?: ("always" | "never" | "offer") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsInvoices
 */
const SchemaIn$AccountCreateBodySettingsInvoices: z.ZodType<
  AccountCreateBodySettingsInvoices, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_payment_method_save: z.enum(["always", "never", "offer"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hosted_payment_method_save: "hostedPaymentMethodSave",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsInvoices
 */
const SchemaOut$AccountCreateBodySettingsInvoices: z.ZodType<
  External$AccountCreateBodySettingsInvoices, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsInvoices // the object to be transformed
> = z
  .object({
    hostedPaymentMethodSave: z.enum(["always", "never", "offer"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedPaymentMethodSave: "hosted_payment_method_save",
    });
  });

export const Schemas$AccountCreateBodySettingsInvoices = {
  in: SchemaIn$AccountCreateBodySettingsInvoices,
  out: SchemaOut$AccountCreateBodySettingsInvoices,
};
