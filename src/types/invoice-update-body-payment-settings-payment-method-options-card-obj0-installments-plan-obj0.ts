import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 =
  {
    count?: number | undefined;
    interval?: "month" | undefined;
    type: "fixed_count";
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 =
  {
    count?: number | undefined;
    interval?: "month" | undefined;
    type: "fixed_count";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0 =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  };
