import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration overrides
 */
export type TerminalReaderRefundPaymentBodyRefundPaymentConfig = {
  enableCustomerCancellation?: boolean | undefined;
};

/**
 * @internal
 * TerminalReaderRefundPaymentBodyRefundPaymentConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderRefundPaymentBodyRefundPaymentConfig = {
  enable_customer_cancellation?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderRefundPaymentBodyRefundPaymentConfig
 */
const SchemaIn$TerminalReaderRefundPaymentBodyRefundPaymentConfig: z.ZodType<
  TerminalReaderRefundPaymentBodyRefundPaymentConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enable_customer_cancellation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enable_customer_cancellation: "enableCustomerCancellation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderRefundPaymentBodyRefundPaymentConfig
 */
const SchemaOut$TerminalReaderRefundPaymentBodyRefundPaymentConfig: z.ZodType<
  External$TerminalReaderRefundPaymentBodyRefundPaymentConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderRefundPaymentBodyRefundPaymentConfig // the object to be transformed
> = z
  .object({
    enableCustomerCancellation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enableCustomerCancellation: "enable_customer_cancellation",
    });
  });

export const Schemas$TerminalReaderRefundPaymentBodyRefundPaymentConfig = {
  in: SchemaIn$TerminalReaderRefundPaymentBodyRefundPaymentConfig,
  out: SchemaOut$TerminalReaderRefundPaymentBodyRefundPaymentConfig,
};
