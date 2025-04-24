import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyAfterCompletionHostedConfirmation
 */
export type PaymentLinkCreateBodyAfterCompletionHostedConfirmation = {
  customMessage?: string | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyAfterCompletionHostedConfirmation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyAfterCompletionHostedConfirmation = {
  custom_message?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyAfterCompletionHostedConfirmation
 */
const SchemaIn$PaymentLinkCreateBodyAfterCompletionHostedConfirmation: z.ZodType<
  PaymentLinkCreateBodyAfterCompletionHostedConfirmation, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyAfterCompletionHostedConfirmation
 */
const SchemaOut$PaymentLinkCreateBodyAfterCompletionHostedConfirmation: z.ZodType<
  External$PaymentLinkCreateBodyAfterCompletionHostedConfirmation, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyAfterCompletionHostedConfirmation // the object to be transformed
> = z
  .object({
    customMessage: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMessage: "custom_message",
    });
  });

export const Schemas$PaymentLinkCreateBodyAfterCompletionHostedConfirmation = {
  in: SchemaIn$PaymentLinkCreateBodyAfterCompletionHostedConfirmation,
  out: SchemaOut$PaymentLinkCreateBodyAfterCompletionHostedConfirmation,
};
