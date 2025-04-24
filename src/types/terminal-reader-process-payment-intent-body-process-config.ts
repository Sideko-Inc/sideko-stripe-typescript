import {
  External$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping,
  Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping,
  TerminalReaderProcessPaymentIntentBodyProcessConfigTipping,
} from "./terminal-reader-process-payment-intent-body-process-config-tipping";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration overrides
 */
export type TerminalReaderProcessPaymentIntentBodyProcessConfig = {
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  enableCustomerCancellation?: boolean | undefined;
  skipTipping?: boolean | undefined;
  tipping?:
    | TerminalReaderProcessPaymentIntentBodyProcessConfigTipping
    | undefined;
};

/**
 * @internal
 * TerminalReaderProcessPaymentIntentBodyProcessConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderProcessPaymentIntentBodyProcessConfig = {
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  enable_customer_cancellation?: boolean | undefined;
  skip_tipping?: boolean | undefined;
  tipping?:
    | External$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderProcessPaymentIntentBodyProcessConfig
 */
const SchemaIn$TerminalReaderProcessPaymentIntentBodyProcessConfig: z.ZodType<
  TerminalReaderProcessPaymentIntentBodyProcessConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    enable_customer_cancellation: z.boolean().optional(),
    skip_tipping: z.boolean().optional(),
    tipping:
      Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay: "allowRedisplay",
      enable_customer_cancellation: "enableCustomerCancellation",
      skip_tipping: "skipTipping",
      tipping: "tipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderProcessPaymentIntentBodyProcessConfig
 */
const SchemaOut$TerminalReaderProcessPaymentIntentBodyProcessConfig: z.ZodType<
  External$TerminalReaderProcessPaymentIntentBodyProcessConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderProcessPaymentIntentBodyProcessConfig // the object to be transformed
> = z
  .object({
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    enableCustomerCancellation: z.boolean().optional(),
    skipTipping: z.boolean().optional(),
    tipping:
      Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfigTipping.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplay: "allow_redisplay",
      enableCustomerCancellation: "enable_customer_cancellation",
      skipTipping: "skip_tipping",
      tipping: "tipping",
    });
  });

export const Schemas$TerminalReaderProcessPaymentIntentBodyProcessConfig = {
  in: SchemaIn$TerminalReaderProcessPaymentIntentBodyProcessConfig,
  out: SchemaOut$TerminalReaderProcessPaymentIntentBodyProcessConfig,
};
