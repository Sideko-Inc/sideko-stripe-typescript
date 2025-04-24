import {
  External$PaymentMethodCreateBodyKlarnaDob,
  PaymentMethodCreateBodyKlarnaDob,
  Schemas$PaymentMethodCreateBodyKlarnaDob,
} from "./payment-method-create-body-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
 */
export type PaymentMethodCreateBodyKlarna = {
  dob?: PaymentMethodCreateBodyKlarnaDob | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyKlarna = {
  dob?: External$PaymentMethodCreateBodyKlarnaDob | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyKlarna
 */
const SchemaIn$PaymentMethodCreateBodyKlarna: z.ZodType<
  PaymentMethodCreateBodyKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$PaymentMethodCreateBodyKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyKlarna
 */
const SchemaOut$PaymentMethodCreateBodyKlarna: z.ZodType<
  External$PaymentMethodCreateBodyKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$PaymentMethodCreateBodyKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$PaymentMethodCreateBodyKlarna = {
  in: SchemaIn$PaymentMethodCreateBodyKlarna,
  out: SchemaOut$PaymentMethodCreateBodyKlarna,
};
