import {
  External$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation,
  PaymentLinkUpdateBodyAfterCompletionHostedConfirmation,
  Schemas$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation,
} from "./payment-link-update-body-after-completion-hosted-confirmation";
import {
  External$PaymentLinkUpdateBodyAfterCompletionRedirect,
  PaymentLinkUpdateBodyAfterCompletionRedirect,
  Schemas$PaymentLinkUpdateBodyAfterCompletionRedirect,
} from "./payment-link-update-body-after-completion-redirect";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Behavior after the purchase is complete.
 */
export type PaymentLinkUpdateBodyAfterCompletion = {
  hostedConfirmation?:
    | PaymentLinkUpdateBodyAfterCompletionHostedConfirmation
    | undefined;
  redirect?: PaymentLinkUpdateBodyAfterCompletionRedirect | undefined;
  type: "hosted_confirmation" | "redirect";
};

/**
 * @internal
 * PaymentLinkUpdateBodyAfterCompletion without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyAfterCompletion = {
  hosted_confirmation?:
    | External$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation
    | undefined;
  redirect?: External$PaymentLinkUpdateBodyAfterCompletionRedirect | undefined;
  type: "hosted_confirmation" | "redirect";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyAfterCompletion
 */
const SchemaIn$PaymentLinkUpdateBodyAfterCompletion: z.ZodType<
  PaymentLinkUpdateBodyAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    hosted_confirmation:
      Schemas$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation.in.optional(),
    redirect:
      Schemas$PaymentLinkUpdateBodyAfterCompletionRedirect.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyAfterCompletion
 */
const SchemaOut$PaymentLinkUpdateBodyAfterCompletion: z.ZodType<
  External$PaymentLinkUpdateBodyAfterCompletion, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyAfterCompletion // the object to be transformed
> = z
  .object({
    hostedConfirmation:
      Schemas$PaymentLinkUpdateBodyAfterCompletionHostedConfirmation.out.optional(),
    redirect:
      Schemas$PaymentLinkUpdateBodyAfterCompletionRedirect.out.optional(),
    type: z.enum(["hosted_confirmation", "redirect"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      hostedConfirmation: "hosted_confirmation",
      redirect: "redirect",
      type: "type",
    });
  });

export const Schemas$PaymentLinkUpdateBodyAfterCompletion = {
  in: SchemaIn$PaymentLinkUpdateBodyAfterCompletion,
  out: SchemaOut$PaymentLinkUpdateBodyAfterCompletion,
};
