import {
  External$InvoiceInstallmentsCard,
  InvoiceInstallmentsCard,
  Schemas$InvoiceInstallmentsCard,
} from "./invoice-installments-card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsCard = {
  installments?: InvoiceInstallmentsCard | undefined;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: ("any" | "automatic" | "challenge") | null | undefined;
};

/**
 * @internal
 * InvoicePaymentMethodOptionsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsCard = {
  installments?: External$InvoiceInstallmentsCard | undefined;
  request_three_d_secure?:
    | ("any" | "automatic" | "challenge")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsCard
 */
const SchemaIn$InvoicePaymentMethodOptionsCard: z.ZodType<
  InvoicePaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    installments: Schemas$InvoiceInstallmentsCard.in.optional(),
    request_three_d_secure: z
      .enum(["any", "automatic", "challenge"])
      .nullable()
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsCard
 */
const SchemaOut$InvoicePaymentMethodOptionsCard: z.ZodType<
  External$InvoicePaymentMethodOptionsCard, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsCard // the object to be transformed
> = z
  .object({
    installments: Schemas$InvoiceInstallmentsCard.out.optional(),
    requestThreeDSecure: z
      .enum(["any", "automatic", "challenge"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      requestThreeDSecure: "request_three_d_secure",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsCard = {
  in: SchemaIn$InvoicePaymentMethodOptionsCard,
  out: SchemaOut$InvoicePaymentMethodOptionsCard,
};
