import {
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob,
  Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob,
} from "./test-helper-confirmation-token-create-body-payment-method-data-klarna-dob";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna = {
  dob?:
    | TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob
    | undefined;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna =
  {
    dob?:
      | External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    dob: Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna // the object to be transformed
> = z
  .object({
    dob: Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarnaDob.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dob: "dob",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataKlarna,
  };
