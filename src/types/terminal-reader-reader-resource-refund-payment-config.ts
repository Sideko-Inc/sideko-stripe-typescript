import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a per-transaction override of a reader configuration
 */
export type TerminalReaderReaderResourceRefundPaymentConfig = {
  /**
   * Enable customer initiated cancellation when refunding this payment.
   */
  enableCustomerCancellation?: boolean | undefined;
};

/**
 * @internal
 * TerminalReaderReaderResourceRefundPaymentConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceRefundPaymentConfig = {
  enable_customer_cancellation?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceRefundPaymentConfig
 */
const SchemaIn$TerminalReaderReaderResourceRefundPaymentConfig: z.ZodType<
  TerminalReaderReaderResourceRefundPaymentConfig, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceRefundPaymentConfig
 */
const SchemaOut$TerminalReaderReaderResourceRefundPaymentConfig: z.ZodType<
  External$TerminalReaderReaderResourceRefundPaymentConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceRefundPaymentConfig // the object to be transformed
> = z
  .object({
    enableCustomerCancellation: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enableCustomerCancellation: "enable_customer_cancellation",
    });
  });

export const Schemas$TerminalReaderReaderResourceRefundPaymentConfig = {
  in: SchemaIn$TerminalReaderReaderResourceRefundPaymentConfig,
  out: SchemaOut$TerminalReaderReaderResourceRefundPaymentConfig,
};
