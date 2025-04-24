import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCompletionBehaviorConfirmationPage = {
  /**
   * The custom message that is displayed to the customer after the purchase is complete.
   */
  customMessage?: string | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourceCompletionBehaviorConfirmationPage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCompletionBehaviorConfirmationPage = {
  custom_message?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCompletionBehaviorConfirmationPage
 */
const SchemaIn$PaymentLinksResourceCompletionBehaviorConfirmationPage: z.ZodType<
  PaymentLinksResourceCompletionBehaviorConfirmationPage, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_message: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_message: "customMessage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCompletionBehaviorConfirmationPage
 */
const SchemaOut$PaymentLinksResourceCompletionBehaviorConfirmationPage: z.ZodType<
  External$PaymentLinksResourceCompletionBehaviorConfirmationPage, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCompletionBehaviorConfirmationPage // the object to be transformed
> = z
  .object({
    customMessage: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMessage: "custom_message",
    });
  });

export const Schemas$PaymentLinksResourceCompletionBehaviorConfirmationPage = {
  in: SchemaIn$PaymentLinksResourceCompletionBehaviorConfirmationPage,
  out: SchemaOut$PaymentLinksResourceCompletionBehaviorConfirmationPage,
};
