import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsCardMandateOptions = {
  /**
   * Amount to be charged for future payments.
   */
  amount: number;
  /**
   * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
   */
  amountType: "fixed" | "maximum";
  /**
   * A description of the mandate or subscription that is meant to be displayed to the customer.
   */
  description?: string | null | undefined;
  /**
   * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
   */
  endDate?: number | null | undefined;
  /**
   * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
   */
  interval: "day" | "month" | "sporadic" | "week" | "year";
  /**
   * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
   */
  intervalCount?: number | null | undefined;
  /**
   * Unique identifier for the mandate or subscription.
   */
  reference: string;
  /**
   * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
   */
  startDate: number;
  /**
   * Specifies the type of mandates supported. Possible values are `india`.
   */
  supportedTypes?: "india"[] | null | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsCardMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsCardMandateOptions = {
  amount: number;
  amount_type: "fixed" | "maximum";
  description?: string | null | undefined;
  end_date?: number | null | undefined;
  interval: "day" | "month" | "sporadic" | "week" | "year";
  interval_count?: number | null | undefined;
  reference: string;
  start_date: number;
  supported_types?: "india"[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsCardMandateOptions
 */
const SchemaIn$PaymentMethodOptionsCardMandateOptions: z.ZodType<
  PaymentMethodOptionsCardMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_type: z.enum(["fixed", "maximum"]),
    description: z.string().nullable().optional(),
    end_date: z.number().int().nullable().optional(),
    interval: z.enum(["day", "month", "sporadic", "week", "year"]),
    interval_count: z.number().int().nullable().optional(),
    reference: z.string(),
    start_date: z.number().int(),
    supported_types: z
      .array(z.enum(["india"]))
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_type: "amountType",
      description: "description",
      end_date: "endDate",
      interval: "interval",
      interval_count: "intervalCount",
      reference: "reference",
      start_date: "startDate",
      supported_types: "supportedTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsCardMandateOptions
 */
const SchemaOut$PaymentMethodOptionsCardMandateOptions: z.ZodType<
  External$PaymentMethodOptionsCardMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsCardMandateOptions // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountType: z.enum(["fixed", "maximum"]),
    description: z.string().nullable().optional(),
    endDate: z.number().int().nullable().optional(),
    interval: z.enum(["day", "month", "sporadic", "week", "year"]),
    intervalCount: z.number().int().nullable().optional(),
    reference: z.string(),
    startDate: z.number().int(),
    supportedTypes: z
      .array(z.enum(["india"]))
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountType: "amount_type",
      description: "description",
      endDate: "end_date",
      interval: "interval",
      intervalCount: "interval_count",
      reference: "reference",
      startDate: "start_date",
      supportedTypes: "supported_types",
    });
  });

export const Schemas$PaymentMethodOptionsCardMandateOptions = {
  in: SchemaIn$PaymentMethodOptionsCardMandateOptions,
  out: SchemaOut$PaymentMethodOptionsCardMandateOptions,
};
