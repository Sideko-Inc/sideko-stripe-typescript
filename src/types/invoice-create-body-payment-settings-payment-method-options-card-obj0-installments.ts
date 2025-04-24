import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0,
} from "./invoice-create-body-payment-settings-payment-method-options-card-obj0-installments-plan-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments =
  {
    enabled?: boolean | undefined;
    plan?:
      | (
          | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    plan: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0InstallmentsPlanObj0.out,
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

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
  };
