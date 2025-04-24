import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
} from "./invoice-update-body-payment-settings-payment-method-options-card-obj0-installments-plan-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      plan: "plan",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      plan: "plan",
    });
  });

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
  };
