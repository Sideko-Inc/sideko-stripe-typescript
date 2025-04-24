import {
  External$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference,
  PaymentMethodConfigurationUpdateBodyCashappDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference,
} from "./payment-method-configuration-update-body-cashapp-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cash App is a popular consumer app in the US that allows customers to bank, invest, send, and receive money using their digital wallet. Check this [page](https://stripe.com/docs/payments/cash-app-pay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyCashapp = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyCashappDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCashapp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCashapp = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCashapp
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCashapp: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCashapp, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCashapp
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCashapp: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCashapp, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCashapp // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCashapp = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyCashapp,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyCashapp,
};
