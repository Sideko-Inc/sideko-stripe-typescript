import {
  External$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference,
  PaymentMethodConfigurationCreateBodyAffirmDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference,
} from "./payment-method-configuration-create-body-affirm-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * [Affirm](https://www.affirm.com/) gives your customers a way to split purchases over a series of payments. Depending on the purchase, they can pay with four interest-free payments (Split Pay) or pay over a longer term (Installments), which might include interest. Check this [page](https://stripe.com/docs/payments/affirm) for more details like country availability.
 */
export type PaymentMethodConfigurationCreateBodyAffirm = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAffirmDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAffirm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAffirm = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAffirm
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAffirm: z.ZodType<
  PaymentMethodConfigurationCreateBodyAffirm, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAffirm
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAffirm: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAffirm, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAffirm // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAffirm = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAffirm,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAffirm,
};
