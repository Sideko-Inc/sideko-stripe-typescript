import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Simulated data for the interac_present payment method.
 */
export type TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent = {
  number?: string | undefined;
};

/**
 * @internal
 * TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent =
  {
    number?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
 */
const SchemaIn$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent: z.ZodType<
  TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      number: "number",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
 */
const SchemaOut$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent: z.ZodType<
  External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent // the object to be transformed
> = z
  .object({
    number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      number: "number",
    });
  });

export const Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent =
  {
    in: SchemaIn$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
    out: SchemaOut$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
  };
