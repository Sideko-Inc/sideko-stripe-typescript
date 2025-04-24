import {
  External$InternalCard,
  InternalCard,
  Schemas$InternalCard,
} from "./internal-card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsMobilepay = {
  card?: InternalCard | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsMobilepay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsMobilepay = {
  card?: External$InternalCard | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsMobilepay
 */
const SchemaIn$PaymentMethodDetailsMobilepay: z.ZodType<
  PaymentMethodDetailsMobilepay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card: Schemas$InternalCard.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsMobilepay
 */
const SchemaOut$PaymentMethodDetailsMobilepay: z.ZodType<
  External$PaymentMethodDetailsMobilepay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsMobilepay // the object to be transformed
> = z
  .object({
    card: Schemas$InternalCard.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
    });
  });

export const Schemas$PaymentMethodDetailsMobilepay = {
  in: SchemaIn$PaymentMethodDetailsMobilepay,
  out: SchemaOut$PaymentMethodDetailsMobilepay,
};
