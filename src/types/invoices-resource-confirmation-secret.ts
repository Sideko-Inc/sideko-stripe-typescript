import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesResourceConfirmationSecret = {
  /**
   * The client_secret of the payment that Stripe creates for the invoice after finalization.
   */
  clientSecret: string;
  /**
   * The type of client_secret. Currently this is always payment_intent, referencing the default payment_intent that Stripe creates during invoice finalization
   */
  type: string;
};

/**
 * @internal
 * InvoicesResourceConfirmationSecret without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesResourceConfirmationSecret = {
  client_secret: string;
  type: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesResourceConfirmationSecret
 */
const SchemaIn$InvoicesResourceConfirmationSecret: z.ZodType<
  InvoicesResourceConfirmationSecret, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_secret: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_secret: "clientSecret",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesResourceConfirmationSecret
 */
const SchemaOut$InvoicesResourceConfirmationSecret: z.ZodType<
  External$InvoicesResourceConfirmationSecret, // output type of this zod object
  z.ZodTypeDef,
  InvoicesResourceConfirmationSecret // the object to be transformed
> = z
  .object({
    clientSecret: z.string(),
    type: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientSecret: "client_secret",
      type: "type",
    });
  });

export const Schemas$InvoicesResourceConfirmationSecret = {
  in: SchemaIn$InvoicesResourceConfirmationSecret,
  out: SchemaOut$InvoicesResourceConfirmationSecret,
};
