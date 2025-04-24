import {
  External$PaymentLinksResourceCompletionBehaviorConfirmationPage,
  PaymentLinksResourceCompletionBehaviorConfirmationPage,
  Schemas$PaymentLinksResourceCompletionBehaviorConfirmationPage,
} from "./payment-links-resource-completion-behavior-confirmation-page";
import {
  External$PaymentLinksResourceCompletionBehaviorRedirect,
  PaymentLinksResourceCompletionBehaviorRedirect,
  Schemas$PaymentLinksResourceCompletionBehaviorRedirect,
} from "./payment-links-resource-completion-behavior-redirect";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceAfterCompletion = {
  hostedConfirmation?:
    | PaymentLinksResourceCompletionBehaviorConfirmationPage
    | undefined;
  redirect?: PaymentLinksResourceCompletionBehaviorRedirect | undefined;
  /**
   * The specified behavior after the purchase is complete.
   */
  type: "hosted_confirmation" | "redirect";
};

/**
 * @internal
 * PaymentLinksResourceAfterCompletion without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceAfterCompletion = {
  hosted_confirmation?:
    | External$PaymentLinksResourceCompletionBehaviorConfirmationPage
    | undefined;
  redirect?:
    | External$PaymentLinksResourceCompletionBehaviorRedirect
    | undefined;
  type: "hosted_confirmation" | "redirect";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceAfterCompletion
 */
const SchemaIn$PaymentLinksResourceAfterCompletion: z.ZodType<
  PaymentLinksResourceAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_confirmation:
      Schemas$PaymentLinksResourceCompletionBehaviorConfirmationPage.in.optional(),
    redirect:
      Schemas$PaymentLinksResourceCompletionBehaviorRedirect.in.optional(),
    type: z.enum(["hosted_confirmation", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hosted_confirmation: "hostedConfirmation",
      redirect: "redirect",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceAfterCompletion
 */
const SchemaOut$PaymentLinksResourceAfterCompletion: z.ZodType<
  External$PaymentLinksResourceAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceAfterCompletion // the object to be transformed
> = z
  .object({
    hostedConfirmation:
      Schemas$PaymentLinksResourceCompletionBehaviorConfirmationPage.out.optional(),
    redirect:
      Schemas$PaymentLinksResourceCompletionBehaviorRedirect.out.optional(),
    type: z.enum(["hosted_confirmation", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedConfirmation: "hosted_confirmation",
      redirect: "redirect",
      type: "type",
    });
  });

export const Schemas$PaymentLinksResourceAfterCompletion = {
  in: SchemaIn$PaymentLinksResourceAfterCompletion,
  out: SchemaOut$PaymentLinksResourceAfterCompletion,
};
