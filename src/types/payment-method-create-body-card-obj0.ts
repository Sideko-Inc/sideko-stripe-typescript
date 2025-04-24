import {
  External$PaymentMethodCreateBodyCardObj0Networks,
  PaymentMethodCreateBodyCardObj0Networks,
  Schemas$PaymentMethodCreateBodyCardObj0Networks,
} from "./payment-method-create-body-card-obj0-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodCreateBodyCardObj0
 */
export type PaymentMethodCreateBodyCardObj0 = {
  cvc?: string | undefined;
  expMonth: number;
  expYear: number;
  networks?: PaymentMethodCreateBodyCardObj0Networks | undefined;
  number: string;
};

/**
 * @internal
 * PaymentMethodCreateBodyCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyCardObj0 = {
  cvc?: string | undefined;
  exp_month: number;
  exp_year: number;
  networks?: External$PaymentMethodCreateBodyCardObj0Networks | undefined;
  number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyCardObj0
 */
const SchemaIn$PaymentMethodCreateBodyCardObj0: z.ZodType<
  PaymentMethodCreateBodyCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cvc: z.string().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    networks: Schemas$PaymentMethodCreateBodyCardObj0Networks.in.optional(),
    number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cvc: "cvc",
      exp_month: "expMonth",
      exp_year: "expYear",
      networks: "networks",
      number: "number",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyCardObj0
 */
const SchemaOut$PaymentMethodCreateBodyCardObj0: z.ZodType<
  External$PaymentMethodCreateBodyCardObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyCardObj0 // the object to be transformed
> = z
  .object({
    cvc: z.string().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    networks: Schemas$PaymentMethodCreateBodyCardObj0Networks.out.optional(),
    number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cvc: "cvc",
      expMonth: "exp_month",
      expYear: "exp_year",
      networks: "networks",
      number: "number",
    });
  });

export const Schemas$PaymentMethodCreateBodyCardObj0 = {
  in: SchemaIn$PaymentMethodCreateBodyCardObj0,
  out: SchemaOut$PaymentMethodCreateBodyCardObj0,
};
