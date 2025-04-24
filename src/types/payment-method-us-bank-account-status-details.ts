import {
  External$PaymentMethodUsBankAccountBlocked,
  PaymentMethodUsBankAccountBlocked,
  Schemas$PaymentMethodUsBankAccountBlocked,
} from "./payment-method-us-bank-account-blocked";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodUsBankAccountStatusDetails = {
  blocked?: PaymentMethodUsBankAccountBlocked | undefined;
};

/**
 * @internal
 * PaymentMethodUsBankAccountStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUsBankAccountStatusDetails = {
  blocked?: External$PaymentMethodUsBankAccountBlocked | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUsBankAccountStatusDetails
 */
const SchemaIn$PaymentMethodUsBankAccountStatusDetails: z.ZodType<
  PaymentMethodUsBankAccountStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    blocked: Schemas$PaymentMethodUsBankAccountBlocked.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      blocked: "blocked",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUsBankAccountStatusDetails
 */
const SchemaOut$PaymentMethodUsBankAccountStatusDetails: z.ZodType<
  External$PaymentMethodUsBankAccountStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUsBankAccountStatusDetails // the object to be transformed
> = z
  .object({
    blocked: Schemas$PaymentMethodUsBankAccountBlocked.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      blocked: "blocked",
    });
  });

export const Schemas$PaymentMethodUsBankAccountStatusDetails = {
  in: SchemaIn$PaymentMethodUsBankAccountStatusDetails,
  out: SchemaOut$PaymentMethodUsBankAccountStatusDetails,
};
