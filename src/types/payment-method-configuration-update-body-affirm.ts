import {
  External$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference,
} from "./payment-method-configuration-update-body-affirm-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * [Affirm](https://www.affirm.com/) gives your customers a way to split purchases over a series of payments. Depending on the purchase, they can pay with four interest-free payments (Split Pay) or pay over a longer term (Installments), which might include interest. Check this [page](https://stripe.com/docs/payments/affirm) for more details like country availability.
 */
export type PaymentMethodConfigurationUpdateBodyAffirm = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAffirm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAffirm = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAffirm
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAffirm: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAffirm, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAffirm
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAffirm: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAffirm, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAffirm // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAffirm = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAffirm,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAffirm,
};
