import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
} from "./invoice-update-body-payment-settings-payment-method-options-card-obj0-installments";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 = {
  installments?:
    | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
    | undefined;
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    installments?:
      | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
      | undefined;
    request_three_d_secure?: ("any" | "automatic" | "challenge") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    installments:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments.in.optional(),
    request_three_d_secure: z
      .enum(["any", "automatic", "challenge"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      request_three_d_secure: "requestThreeDSecure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    installments:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments.out.optional(),
    requestThreeDSecure: z.enum(["any", "automatic", "challenge"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      requestThreeDSecure: "request_three_d_secure",
    });
  });

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  };
