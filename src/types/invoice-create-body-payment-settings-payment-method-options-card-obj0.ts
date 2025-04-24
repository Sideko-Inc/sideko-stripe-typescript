import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments,
} from "./invoice-create-body-payment-settings-payment-method-options-card-obj0-installments";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 = {
  installments?:
    | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
    | undefined;
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    installments?:
      | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments
      | undefined;
    request_three_d_secure?: ("any" | "automatic" | "challenge") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    installments:
      Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 // the object to be transformed
> = z
  .object({
    installments:
      Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0Installments.out.optional(),
    requestThreeDSecure: z.enum(["any", "automatic", "challenge"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      requestThreeDSecure: "request_three_d_secure",
    });
  });

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  };
