import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTerminalReaderPresentPaymentMethodBody,
  Schemas$TestHelperTerminalReaderPresentPaymentMethodBody,
  TestHelperTerminalReaderPresentPaymentMethodBody,
} from "@sideko-inc/stripe/types/test-helper-terminal-reader-present-payment-method-body";
import * as z from "zod";

/**
 * PresentPaymentMethodRequest
 */
export type PresentPaymentMethodRequest = {
  data?: TestHelperTerminalReaderPresentPaymentMethodBody | undefined;
  reader: string;
};

/**
 * @internal
 * PresentPaymentMethodRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PresentPaymentMethodRequest = {
  data?: External$TestHelperTerminalReaderPresentPaymentMethodBody | undefined;
  reader: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PresentPaymentMethodRequest
 */
const SchemaIn$PresentPaymentMethodRequest: z.ZodType<
  PresentPaymentMethodRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTerminalReaderPresentPaymentMethodBody.in.optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      reader: "reader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PresentPaymentMethodRequest
 */
const SchemaOut$PresentPaymentMethodRequest: z.ZodType<
  External$PresentPaymentMethodRequest, // output type of this zod object
  z.ZodTypeDef,
  PresentPaymentMethodRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTerminalReaderPresentPaymentMethodBody.out.optional(),
    reader: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      reader: "reader",
    });
  });

export const Schemas$PresentPaymentMethodRequest = {
  in: SchemaIn$PresentPaymentMethodRequest,
  out: SchemaOut$PresentPaymentMethodRequest,
};
