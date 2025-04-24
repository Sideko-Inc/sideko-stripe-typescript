import {
  External$PaymentFlowsPrivatePaymentMethodsKlarnaDob,
  PaymentFlowsPrivatePaymentMethodsKlarnaDob,
  Schemas$PaymentFlowsPrivatePaymentMethodsKlarnaDob,
} from "./payment-flows-private-payment-methods-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodKlarna = {
  dob?: PaymentFlowsPrivatePaymentMethodsKlarnaDob | undefined;
};

/**
 * @internal
 * PaymentMethodKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodKlarna = {
  dob?: External$PaymentFlowsPrivatePaymentMethodsKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodKlarna
 */
const SchemaIn$PaymentMethodKlarna: z.ZodType<
  PaymentMethodKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$PaymentFlowsPrivatePaymentMethodsKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodKlarna
 */
const SchemaOut$PaymentMethodKlarna: z.ZodType<
  External$PaymentMethodKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$PaymentFlowsPrivatePaymentMethodsKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$PaymentMethodKlarna = {
  in: SchemaIn$PaymentMethodKlarna,
  out: SchemaOut$PaymentMethodKlarna,
};
