import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderProcessPaymentIntentBodyProcessConfigTipping
 */
export type TerminalReaderProcessPaymentIntentBodyProcessConfigTipping = {
  amountEligible?: number | undefined;
};

/**
 * @internal
 * TerminalReaderProcessPaymentIntentBodyProcessConfigTipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping =
  {
    amount_eligible?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderProcessPaymentIntentBodyProcessConfigTipping
 */
const SchemaIn$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping: z.ZodType<
  TerminalReaderProcessPaymentIntentBodyProcessConfigTipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_eligible: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_eligible: "amountEligible",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping
 */
const SchemaOut$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping: z.ZodType<
  External$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderProcessPaymentIntentBodyProcessConfigTipping // the object to be transformed
> = z
  .object({
    amountEligible: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountEligible: "amount_eligible",
    });
  });

export const Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping =
  {
    in: SchemaIn$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping,
    out: SchemaOut$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping,
  };
