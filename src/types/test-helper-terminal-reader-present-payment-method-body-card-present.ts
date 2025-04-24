import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Simulated data for the card_present payment method.
 */
export type TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent = {
  number?: string | undefined;
};

/**
 * @internal
 * TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent =
  {
    number?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
 */
const SchemaIn$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent: z.ZodType<
  TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
 */
const SchemaOut$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent: z.ZodType<
  External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent // the object to be transformed
> = z
  .object({
    number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      number: "number",
    });
  });

export const Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent =
  {
    in: SchemaIn$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
    out: SchemaOut$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
  };
