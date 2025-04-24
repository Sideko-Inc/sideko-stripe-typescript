import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyAfterCompletionHostedConfirmation
 */
export type PaymentLinkUpdateBodyAfterCompletionHostedConfirmation = {
  customMessage?: string | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyAfterCompletionHostedConfirmation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation = {
  custom_message?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyAfterCompletionHostedConfirmation
 */
const SchemaIn$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation: z.ZodType<
  PaymentLinkUpdateBodyAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_message: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_message: "customMessage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation
 */
const SchemaOut$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation: z.ZodType<
  External$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyAfterCompletionHostedConfirmation // the object to be transformed
> = z
  .object({
    customMessage: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMessage: "custom_message",
    });
  });

export const Schemas$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation = {
  in: SchemaIn$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation,
  out: SchemaOut$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation,
};
