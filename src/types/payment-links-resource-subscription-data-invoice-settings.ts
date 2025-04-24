import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceSubscriptionDataInvoiceSettings = {
  issuer: ConnectAccountReference;
};

/**
 * @internal
 * PaymentLinksResourceSubscriptionDataInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceSubscriptionDataInvoiceSettings = {
  issuer: External$ConnectAccountReference;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceSubscriptionDataInvoiceSettings
 */
const SchemaIn$PaymentLinksResourceSubscriptionDataInvoiceSettings: z.ZodType<
  PaymentLinksResourceSubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    issuer: z.lazy(() => Schemas$ConnectAccountReference.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceSubscriptionDataInvoiceSettings
 */
const SchemaOut$PaymentLinksResourceSubscriptionDataInvoiceSettings: z.ZodType<
  External$PaymentLinksResourceSubscriptionDataInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceSubscriptionDataInvoiceSettings // the object to be transformed
> = z
  .object({
    issuer: z.lazy(() => Schemas$ConnectAccountReference.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      issuer: "issuer",
    });
  });

export const Schemas$PaymentLinksResourceSubscriptionDataInvoiceSettings = {
  in: SchemaIn$PaymentLinksResourceSubscriptionDataInvoiceSettings,
  out: SchemaOut$PaymentLinksResourceSubscriptionDataInvoiceSettings,
};
