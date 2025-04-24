import {
  External$PaymentMethodConfigurationCreateBodyJcbDisplayPreference,
  PaymentMethodConfigurationCreateBodyJcbDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyJcbDisplayPreference,
} from "./payment-method-configuration-create-body-jcb-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * JCB is a credit card company based in Japan. JCB is currently available in Japan to businesses approved by JCB, and available to all businesses in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, United Kingdom, United States, and all countries in the European Economic Area except Iceland. Check this [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments) for more details.
 */
export type PaymentMethodConfigurationCreateBodyJcb = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyJcbDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyJcb without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyJcb = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyJcbDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyJcb
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyJcb: z.ZodType<
  PaymentMethodConfigurationCreateBodyJcb, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyJcbDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyJcb
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyJcb: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyJcb, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyJcb // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyJcbDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyJcb = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyJcb,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyJcb,
};
