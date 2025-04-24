import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails =
  {
    /**
     * IP address of the user initiating the OutboundPayment. Set if `present` is set to `true`. IP address collection is required for risk and compliance reasons. This will be used to help determine if the OutboundPayment is authorized or should be blocked.
     */
    ipAddress?: string | null | undefined;
    /**
     * `true` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
     */
    present: boolean;
  };

/**
 * @internal
 * TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails =
  {
    ip_address?: string | null | undefined;
    present: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails
 */
const SchemaIn$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails: z.ZodType<
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string().nullable().optional(),
    present: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      present: "present",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails
 */
const SchemaOut$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails: z.ZodType<
  External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails // the object to be transformed
> = z
  .object({
    ipAddress: z.string().nullable().optional(),
    present: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      present: "present",
    });
  });

export const Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails =
  {
    in: SchemaIn$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails,
    out: SchemaOut$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails,
  };
