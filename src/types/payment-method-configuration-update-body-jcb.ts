import {
  External$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference,
  PaymentMethodConfigurationUpdateBodyJcbDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference,
} from "./payment-method-configuration-update-body-jcb-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * JCB is a credit card company based in Japan. JCB is currently available in Japan to businesses approved by JCB, and available to all businesses in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, United Kingdom, United States, and all countries in the European Economic Area except Iceland. Check this [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyJcb = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyJcbDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyJcb without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyJcb = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyJcb
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyJcb: z.ZodType<
  PaymentMethodConfigurationUpdateBodyJcb, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyJcb
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyJcb: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyJcb, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyJcb // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyJcb = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyJcb,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyJcb,
};
