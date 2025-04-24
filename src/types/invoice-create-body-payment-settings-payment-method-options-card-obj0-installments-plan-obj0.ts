import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 =
  {
    count?: number | undefined;
    interval?: "month" | undefined;
    type: "fixed_count";
  };

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 =
  {
    count?: number | undefined;
    interval?: "month" | undefined;
    type: "fixed_count";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    count: z.number().int().optional(),
    interval: z.enum(["month"]).optional(),
    type: z.enum(["fixed_count"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      interval: "interval",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 // the object to be transformed
> = z
  .object({
    count: z.number().int().optional(),
    interval: z.enum(["month"]).optional(),
    type: z.enum(["fixed_count"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      interval: "interval",
      type: "type",
    });
  });

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  };
